document.getElementById('quoteForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const material = document.getElementById('material').value;
  const quantity = parseInt(document.getElementById('quantity').value);
  const notes = document.getElementById('notes').value.trim();
  if (!fullname || !email || !phone || !material || quantity < 1) {
    alert('Please fill out all required fields correctly.');
    return;
  }
  const quoteData = { fullname, email, phone, material, quantity, notes, date: new Date().toISOString() };
  let allQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
  allQuotes.push(quoteData);
  localStorage.setItem('quotes', JSON.stringify(allQuotes));
  document.getElementById('confirmation').style.display = 'block';
  document.getElementById('quoteForm').reset();
});