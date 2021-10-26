package Driving;
use Mojo::Base 'Mojolicious', -signatures;
use Mojo::Pg;

# This method will run once at server start
sub startup ($self) {

    # Load configuration from config file
    my $config = $self->plugin('NotYAMLConfig');

    $self->helper(pg => sub { state $pg = Mojo::Pg->new('postgresql://vue@/vue') });
    $self->hook(after_dispatch => sub { 
        my $c = shift; 
        $c->res->headers->header('Access-Control-Allow-Origin' => '*'); 
        $c->res->headers->access_control_allow_origin('*');
        $c->res->headers->header('Access-Control-Allow-Methods' => 'GET, OPTIONS, POST, DELETE, PUT');
        $c->res->headers->header('Access-Control-Allow-Headers' => 'Content-Type' => 'application/x-www-form-urlencoded');
    });

    # Configure the application
    $self->secrets($config->{secrets});

    # Router
    my $r = $self->routes;

    # Normal route to controller
    $r->get('/')->to('example#welcome');
    
    # API
    {
        my $data = $r->under('/data');

        $data->post('/login')->to('auth#login');
        $data->post('/signup')->to('auth#signup');
    }
}

1;
