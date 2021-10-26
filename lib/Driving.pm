package Driving;
use Mojo::Base 'Mojolicious', -signatures;
use Mojo::Pg;

# This method will run once at server start
sub startup ($self) {

  # Load configuration from config file
  my $config = $self->plugin('NotYAMLConfig');

  $self->helper(pg => sub { state $pg = Mojo::Pg->new('postgresql://vue@/vue') });

  # Configure the application
  $self->secrets($config->{secrets});

  # Router
  my $r = $self->routes;

  # Normal route to controller
  $r->get('/')->to('example#welcome');
  $r->get('/users')->to(cb => sub ($c) { $c->render(text => $c->pg->db->query('SELECT username FROM users')->text) });
}

1;
