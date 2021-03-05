let tasks = [];
let id = 0;

window.onload = () => {
  document.getElementById('task-add').addEventListener('click', async() => {
    let cid = id;
    let taskItem = document.createElement('div');
    console.log(document.getElementById('task-textedit'));
    taskText = document.getElementById('task-textedit').value;
    taskItem.id = 'b' + id;
    tasks.push({text:taskText, id:id, readiness:'UNREADY'});
    console.log(tasks, tasks[id], id);
    document.querySelector('#task').content.querySelector('p').innerText = tasks[id].text;
    document.querySelector('#task').content.querySelector('.task-circle').className='task-circle task-circle-red';
    document.querySelector('#task').content.querySelector('.task-unready').style.display = 'none';

    taskItem.innerHTML = document.getElementById('task').innerHTML;
    document.getElementsByClassName('todolist')[0].appendChild(taskItem);

    document.querySelector('#b' + id).querySelector('.task-ready').addEventListener('click', async() => {
      console.log(tasks,tasks[cid],cid);
      
      tasks[cid].readiness = 'READY';
      document.querySelector('#b' + cid).querySelector('.task-circle').className='task-circle task-circle-green';
      document.querySelector('#b' + cid).querySelector('.task-ready').style.display = 'none';
      document.querySelector('#b' + cid).querySelector('.task-unready').style.display = 'inline-block';
    });
  
    document.querySelector('#b' + id).querySelector('.task-unready').addEventListener('click', async() => {
      tasks[cid].readiness = 'UNREADY';
      document.querySelector('#b' + cid).querySelector('.task-circle').className='task-circle task-circle-red';
      document.querySelector('#b' + cid).querySelector('.task-ready').style.display = 'inline-block';
      document.querySelector('#b' + cid).querySelector('.task-unready').style.display = 'none';
    });
  
    document.querySelector('#b' + id).querySelector('.task-delete').addEventListener('click', async() => {
      tasks.slice(cid);
      document.querySelector('#b' + cid).remove();
    });

    id = id + 1;
  });

  document.getElementById('task-removeall').addEventListener('click', async() => {
    document.getElementsByClassName('todolist')[0].innerHTML = '';
    tasks = [];
    id = 0;
  });

  document.getElementById('task-readyall').addEventListener('click', async() => {
    for(let i = 0; i < tasks.length; ++i)
    {
      tasks[i].readiness='READY';
      document.querySelector('#'+ id).querySelector('.task-circle').className='task-circle task-circle-green';
    }
  });
}