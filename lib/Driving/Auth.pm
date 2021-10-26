package Driving::Auth;
use Mojo::Base 'Mojolicious::Controller';

sub login {
    my $c = shift;

    my $data = $c->req->json;
    $c->render(json => { asd => 'valami', xd => $data});
}

sub signup {
    my $c = shift;
}

1;
