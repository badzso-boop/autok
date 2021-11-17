package Driving::Places;
use Mojo::Base 'Mojolicious::Controller';

sub upload {
    my $c = shift;
    
    my $json = $c->req->json;

    return $c->render(status => 400, json => { msg => 'size expected'}) if (length($c->req->body) > 262144);
    return $c->render(status => 400, json => { msg => 'bad format'}) unless (ref($c->req->json) eq 'HASH');

    # title
    # content
    # county - megye
    # type
    # space - fhely
    # picture (TODO: nem biztos, hogy lesz idő)

    my $title = $json->{title};
    $title =~ s/\s+/_/g;
    my $img_filename = lc $title;
    
    my $ans = $c->pg->db->insert('places', {
        title   => $json->{title},
        content => $json->{content},
        county  => $json->{county},
        type    => $json->{type},
        space   => $json->{space},
        picture => $img_filename,
    }, { returning => 'id' })->hash;

    return $c->render(status => 400, json => { msg => 'Nem sikerült felvinni a helyszínt az adatbázisba!'}) unless exists $ans->{id};

    return $c->render(status => 200, json => { success => 0 });
}

sub get {
    my $c = shift;

    my $offset = $c->param('offset');

    my $res = $c->pg->db->query(<<SQL, $offset)->hashes;
SELECT
    *
FROM
    places
ORDER BY created DESC
LIMIT 10
OFFSET ?
SQL

    return $c->render(status => 404, json => { msg => 'Hiányzó utak!' }) unless scalar @$res > 0;
    return $c->render(status => 200, json => { data => $res });
}

sub filter {
    my $c = shift;

    my $json = $c->req->json;

    return $c->render(status => 400, json => { msg => 'size expected'}) if (length($c->req->body) > 262144);
    return $c->render(status => 400, json => { msg => 'bad format'}) unless (ref($c->req->json) eq 'HASH');

    
    my @p = (
        $json->{county},
        $json->{type},
        $json->{space},
        $json->{offset},
    );

    my $res = $c->pg->db->query(<<SQL, @p)->hashes;
SELECT
    *
FROM
    places
WHERE
    county = ?
AND
    type = ?
AND
    space = ?
ORDER BY created DESC
LIMIT 10
OFFSET ?
SQL
    
    return $c->render(status => 404, json => { msg => 'Hiányzó utak!' }) unless scalar @$res > 0;
    return $c->render(status => 200, json => { data => $res });
}

1;
