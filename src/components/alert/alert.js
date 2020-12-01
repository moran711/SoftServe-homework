import {$} from '@core/dom';

export function showAlert(message, success = true) {
  const alertTemplate = `
    <div class="alert">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
      ${message}
    </div>
   `;
  $('body').insertAdjacentHTML('afterend', alertTemplate);
  if (success === false) {
    $('.alert').css({background: '#fc034e'});
  }
  setTimeout(() => {
    $('.alert').remove();
  }, 2000);
}
