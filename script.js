
  document.addEventListener("DOMContentLoaded", function() {

	  select=document.getElementById('payment_interval');
	  const options = Array.from(select.options);

	  options.forEach((option, i) => {
          let radio = document.createElement('input');
		  radio.setAttribute('type', 'radio');
		  radio.setAttribute('name', 'payment[interval]');
		  radio.setAttribute('value', option.value);
		  document.getElementById('intervalChoice').append(radio);

		  let label = document.createElement('label');
		  label.setAttribute('for', option.text);
		  label.textContent = option.text;

		  document.getElementById('intervalChoice').append(label);

	  });



  });
