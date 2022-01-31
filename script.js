
function convertSelectinRadio(selectid,selectname)
{
	select=document.getElementById(selectid);
	const options = Array.from(select.options);
	options.forEach((option, i) => {
		let radio = document.createElement('input');
		radio.setAttribute('type', 'radio');
		radio.setAttribute('name', selectname);
		radio.setAttribute('value', option.value);
		select.after(radio);

		let label = document.createElement('label');
		label.setAttribute('for', option.text);
		label.textContent = option.text;
		select.after(label);

	});
}
