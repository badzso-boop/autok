package Driving::Auth;
use Mojo::Base 'Mojolicious::Controller';

sub login {
    my $c = shift;

    my $data = $c->req->json;

    return $c->render(status => 403, text => 'Hiányzó adatok!') unless exists $data->{email} and exists $data->{password};
    
    my @p = ($data->{email}, $data->{password});
    my $res = $c->pg->db->query(<<SQL, @p)->hash;
SELECT
    *
FROM
    users
WHERE
    email = ?
AND
    password = SHA256(?)
SQL
    
    return $c->render(status => 404, text => 'Nem található felhasználó!') unless keys %$res;
    $c->render(json => { success => 0 });
}

sub signup {
    my $c = shift;

    my $data = $c->req->json;
    return $c->render(status => 403, text => 'Hiányzó adatok!') unless exists $data->{email} and exists $data->{password} and exists $data->{username} and exists $data->{fullname};

    my @p = (
        $data->{username},
        $data->{fullname},
        $data->{email},
        $data->{password},
    );

    my $res = $c->pg->db->query(<<SQL, @p)->hash;
INSERT INTO users (
    username,
    fullname,
    email,
    password
) values (
    ?,?,?,SHA256(?)
) RETURNING id
SQL

    return $c->render(status => 500, text => 'Szerver hiba!') unless exists $res->{id};

    $c->render(json => { success => 0 });
}

1;
