/**
* Registers login page translations on the translation provider
**/
export default function LoginTranslations($translateProvider) {
    $translateProvider.translations('en', {
        'LOGIN:LOGIN': 'SIGN IN',
        'LOGIN:USER_NAME': 'USER NAME',
        'LOGIN:PASSWORD': 'PASSWORD',
        'LOGIN:SIGN_IN': 'SIGN IN',
        'LOGIN:USER_NAME_REQUIRED': 'The User name field is required.',
        'LOGIN:PASSWORD_REQUIRED': 'The Password field is required.',
        'AUTHENTICATION:NOT_FOUND': 'The username or password provided is incorrect.',
        'AUTHENTICATION:NOT_AUTHORISED': 'Sorry, you are not authorised to use this application.',
        'AUTHENTICATION:UNKNOWN_ERROR': 'An unknown error occurred. Please try again.'
    });
    $translateProvider.translations('es', {
        'LOGIN:LOGIN': 'REGISTRARSE',
        'LOGIN:USER_NAME': 'USUARIO',
        'LOGIN:PASSWORD': 'CONTRASEÑA',
        'LOGIN:SIGN_IN': 'Registrarse',
        'LOGIN:USER_NAME_REQUIRED': 'Se requiere que el campo Nombre de usuario.',
        'LOGIN:PASSWORD_REQUIRED': 'Se requiere que el campo Contraseña.',
        'AUTHENTICATION:NOT_FOUND': 'El nombre de usuario o contraseña proporcionada es incorrecta.',
        'AUTHENTICATION:NOT_AUTHORISED': 'Lo sentimos , no autorizado para utilizar esta aplicación .',
        'AUTHENTICATION:UNKNOWN_ERROR': 'Un error desconocido ocurrió. Por favor, vuelva a intentarlo .'
    });
};