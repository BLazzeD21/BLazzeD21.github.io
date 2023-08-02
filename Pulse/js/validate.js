const validateForm = (form) => {
  $(form).validate({
    errorClass: 'validate',
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      phone: 'required',
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: 'Пожалуйста, введите имя',
        minlength: jQuery.validator
          .format('Имя пользователя должно быть не меньше {0} символа!'),
      },
      phone: 'Пожалуйста, введите номер телефона',
      email: {
        required: 'Пожалуйста, введите почту',
        email: 'Введите корректный почтовый адрес',
      },
    },
  });
};

validateForm('#consultation form');
validateForm('#consultation-form');
validateForm('#order form');

$('input[name=phone]').mask('+7 (999) 999-99-99');

