document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) =>{
    AddTODO(e);
  } );
});


function AddTODO(e)
{
  e.preventDefault();


  let textValue = document.getElementById('new-task-description').value;


  if (textValue == "")
    return;


  let p = document.createElement('p');
  p.textContent = textValue;


  let btn = document.createElement('button');
  btn.textContent = 'x';
  btn.addEventListener('click', () =>{
    RemoveTODO(p);
  });


  p.appendChild(btn);


  document.querySelector('#list').appendChild(p);


  // Clear submit
  document.getElementById('new-task-description').value = "";
}


function RemoveTODO(p)
{
  p.remove();
}