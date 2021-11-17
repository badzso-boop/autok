package Driving::Roads;
use Mojo::Base 'Mojolicious::Controller';
use Data::Dumper;

sub upload {
    my $c = shift;
    
    my $json = $c->req->json;

    return $c->render(status => 400, json => { msg => 'size expected'}) if (length($c->req->body) > 262144);
    return $c->render(status => 400, json => { msg => 'bad format'}) unless (ref($c->req->json) eq 'HASH');

    # title
    # content
    # county - megye
    # type
    # length (út hossza)
    # picture (TODO: nem biztos, hogy lesz idő)

    return $c->render(status => 400, json => { msg => 'Az út hossza csak pozitív szám lehet'}) unless $json->{length} =~ /^\d+[\.,]?\d*/ and not $json->{length} =~ /-/;
    my $title = $json->{title};
    $title =~ s/\s+/_/g;
    my $img_filename = lc $title;
    $c->app->log->debug('Image filename: ' . $img_filename);
    $c->app->log->debug('Kep tartalma: ');
    
    $c->app->log->debug(Dumper($json->{picture}));

    my $ans = $c->pg->db->insert('roads', {
        title   => $json->{title},
        content => $json->{content},
        county  => $json->{county},
        type    => $json->{type},
        quality => $json->{quality},
        length  => $json->{length},
        picture => $img_filename,
    }, { returning => 'id' })->hash;

    return $c->render(status => 400, json => { msg => 'Nem sikerült felvinni az utat az adatbázisba!'}) unless exists $ans->{id};

    return $c->render(status => 200, json => { success => 0 });
}

sub get {
    my $c = shift;

    my $offset = $c->param('offset');

    my $res = $c->pg->db->query(<<SQL, $offset)->hashes;
SELECT
    *
FROM
    roads
ORDER BY created DESC
LIMIT 10
OFFSET ?
SQL

    $c->app->log->debug(Dumper($res));
    return $c->render(status => 404, json => { msg => 'Hiányzó utak!' }) unless scalar @$res > 0;
    return $c->render(status => 200, json => { data => $res });
}

sub filter {
    my $c = shift;

    my $json = $c->req->json;

    return $c->render(status => 400, json => { msg => 'size expected'}) if (length($c->req->body) > 262144);
    return $c->render(status => 400, json => { msg => 'bad format'}) unless (ref($c->req->json) eq 'HASH');

    # county
    # type
    # quality
    # length
    
    my @p = (
        $json->{county},
        $json->{type},
        $json->{quality},
        $json->{length},
        $json->{offset},
    );

    $c->app->log->debug(Dumper($json));

    my $res = $c->pg->db->query(<<SQL, @p)->hashes;
SELECT
    *
FROM
    roads
WHERE
    county = ?
AND
    type = ?
AND
    quality = ?
AND
    length = ?
ORDER BY created DESC
LIMIT 10
OFFSET ?
SQL
    
    return $c->render(status => 404, json => { msg => 'Hiányzó utak!' }) unless scalar @$res > 0;
    return $c->render(status => 200, json => { data => $res });
}

1;
