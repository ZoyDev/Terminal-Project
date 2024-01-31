var n="Zoy";
document.getElementById('input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        let input = this.value;
        let output = document.getElementById('output');
        let line = document.createElement('p');
        output.appendChild(line);
        this.value = '';
        let c=input.toString();
        var vett=c.split(" ");
        if(input === 'help') {
            line = document.createElement('p');
            line.textContent = 'Available commands: sudo contacts, sudo projects, sudo about';
            output.appendChild(line);
        }else if(input == 'sudo contacts'){
            line = document.createElement('p');
            line.textContent = '@zoy.dz || zoy#4401'
            output.appendChild(line);
        }else if(input == 'sudo projects'){
            line = document.createElement('p');
            line.textContent = 'Many progect in githu '
            output.appendChild(line);
        }else if(input == 'sudo about'){
            line = document.createElement('p');
            line.textContent = '17 years old guy'
            output.appendChild(line);
        }else if(input == "print a"){
            line = document.createElement('p');
            line.textContent = 'a'
            output.appendChild(line);
        }else if(vett[0] == "rename"){
            line = document.createElement('p');
            line.textContent = 'Renamed';
            output.appendChild(line);
            line.textContent = '127.0.0.1|'+vett[1]+': ' + input;
            
        }else{
            line = document.createElement('p');
            line.textContent = 'Command not found: ' + input + '. Type "sudo help" for a list of commands.';
            output.appendChild(line);
        }

        e.preventDefault();
    }
});
