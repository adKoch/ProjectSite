import emailjs from 'emailjs-com';

const serviceId = 'default_service';
const templateId = 'simple_contact';
const userId = 'user_TNo40pGAvYUn57hII3eot';

export function initMail() {
  emailjs.init(userId);
}

export function sendMail(title: string,
                         content: string,
                         sign: string,
                         recaptchaResponse: string,
                         onSuccess: (status: number, text: string) => any,
                         onError: (error: any) => any) {
  const templateParams = {
    'message_title': title,
    'message_content': content,
    'message_sign': sign,
    'g-recaptcha-response': recaptchaResponse,
  };
  return emailjs.send(serviceId, templateId, templateParams)
    .then((result) => onSuccess(result.status, result.text), (error) => onError(error));
}



