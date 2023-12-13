import { useState } from 'react';
import { Container, Grid, Card, CardHeader, CardContent, TextField, Button, FormHelperText } from '@mui/material';

const LoginForm = () => {
    const [googleClientId, setGoogleClientId] = useState('');
    const [googleClientSecret, setGoogleClientSecret] = useState('');
    const [facebookClientId, setFacebookClientId] = useState('');
    const [facebookClientSecret, setFacebookClientSecret] = useState('');

    const handleSubmitGoogle = (event) => {
        event.preventDefault();

    };

    const handleSubmitFacebook = (event) => {
        event.preventDefault();

    };
    const handleSubmitTwitter = (event) => {
        event.preventDefault();

    };
    const handleSubmitApple = (event) => {
        event.preventDefault();

    };

    return (
        <div style={{ backgroundColor: '#ede7f6' }}>
            <Container style={{ paddingTop: '25px', paddingBottom: '130px' }}>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <Card>
                            <CardHeader title="Google Login Credential" />
                            <CardContent>

                                <form onSubmit={handleSubmitGoogle}>

                                    <Grid container spacing={3} alignItems="center">
                                        <Grid item xs={3}>
                                            <label htmlFor="inputPassword6">Client ID</label>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <TextField
                                                fullWidth
                                                label="gogole_client_id"
                                                value={googleClientId}
                                                onChange={(e) => setGoogleClientId(e.target.value)}
                                                placeholder="E6ZoDHDEucw6Tg13kl2xFq_b"
                                                required
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={3} alignItems="center">
                                        <Grid item xs={3}>
                                            <label htmlFor="inputPassword6">Client Secret</label>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <TextField style={{ paddingTop: '15px' }}
                                                fullWidth
                                                label="gogole_secret_id"
                                                value={googleClientSecret}
                                                onChange={(e) => setGoogleClientSecret(e.target.value)}
                                                placeholder="E6ZoDHDEucw6Tg13kl2xFq_b"
                                                required
                                            />
                                        </Grid>

                                    </Grid>
                                </form>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6}>
                        <Card>
                            <CardHeader title="Facebook Login Credential" />
                            <CardContent>

                                <form onSubmit={handleSubmitFacebook}>

                                    <Grid container spacing={3} alignItems="center">
                                        <Grid item xs={3}>
                                            <label htmlFor="inputPassword6">Client ID</label>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <TextField
                                                fullWidth
                                                label="otp_client_id"
                                                value={googleClientId}
                                                onChange={(e) => setGoogleClientId(e.target.value)}
                                                placeholder="E6ZoDHDEucw6Tg13kl2xFq_b"
                                                required
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={3} alignItems="center">
                                        <Grid item xs={3}>
                                            <label htmlFor="inputPassword6">Client Secret</label>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <TextField style={{ paddingTop: '15px' }}
                                                fullWidth
                                                label="otp_secret_id"
                                                value={googleClientSecret}
                                                onChange={(e) => setGoogleClientSecret(e.target.value)}
                                                placeholder="E6ZoDHDEucw6Tg13kl2xFq_b"
                                                required
                                            />
                                        </Grid>

                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6}>
                        <Card>
                            <CardHeader title="Twitter Login Credential" />
                            <CardContent>

                                <form onSubmit={handleSubmitTwitter}>

                                    <Grid container spacing={3} alignItems="center">
                                        <Grid item xs={3}>
                                            <label htmlFor="inputPassword6">Client ID</label>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <TextField
                                                fullWidth
                                                label="apple_client_id"
                                                value={googleClientId}
                                                onChange={(e) => setGoogleClientId(e.target.value)}
                                                placeholder="E6ZoDHDEucw6Tg13kl2xFq_b"
                                                required
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={3} alignItems="center">
                                        <Grid item xs={3}>
                                            <label htmlFor="inputPassword6">Client Secret</label>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <TextField style={{ paddingTop: '15px' }}
                                                fullWidth
                                                label="apple_secret_id"
                                                value={googleClientSecret}
                                                onChange={(e) => setGoogleClientSecret(e.target.value)}
                                                placeholder="E6ZoDHDEucw6Tg13kl2xFq_b"
                                                required
                                            />
                                        </Grid>

                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6}>
                        <Card>
                            <CardHeader title="Apple Login Credential" />
                            <CardContent>
                                <form onSubmit={handleSubmitApple}>

                                    <Grid container spacing={3} alignItems="center">
                                        <Grid item xs={3}>
                                            <label htmlFor="inputPassword6">Callback Url</label>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <TextField
                                                fullWidth
                                                label="payment_id"
                                                value={googleClientId}
                                                onChange={(e) => setGoogleClientId(e.target.value)}
                                                placeholder="E6ZoDHDEucw6Tg13kl2xFq_b"
                                                required
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={3} alignItems="center">
                                        <Grid item xs={3}>
                                            <label htmlFor="inputPassword6">Client ID</label>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <TextField style={{ paddingTop: '15px' }}
                                                fullWidth
                                                label="payment_password"
                                                value={googleClientSecret}
                                                onChange={(e) => setGoogleClientSecret(e.target.value)}
                                                placeholder="E6ZoDHDEucw6Tg13kl2xFq_b"
                                                required
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={3} alignItems="center">
                                        <Grid item xs={3}>
                                            <label htmlFor="inputPassword6">Client Secret</label>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <TextField style={{ paddingTop: '15px' }}
                                                fullWidth
                                                label="sandbox_mode"
                                                value={googleClientSecret}
                                                onChange={(e) => setGoogleClientSecret(e.target.value)}
                                                placeholder="true"
                                                required
                                            />
                                        </Grid>

                                    </Grid>
                                </form>
                            </CardContent>

                        </Card>

                    </Grid>

                    <div style={{ textAlign: 'right', width: '90%', paddingTop:'30px' }}>
                        <Button style={{ backgroundColor: '#f57c00', }} type="submit" variant="contained">
                            Save
                        </Button>
                    </div>

                </Grid>
            </Container>
        </div>


    );
};

export default LoginForm;
