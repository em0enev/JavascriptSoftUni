class Computer {
    _usedRam = 0;
    _usedCpu = 0;

    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = Number(ramMemory),
            this.cpuGHz = Number(cpuGHz),
            this.hddMemory = Number(hddMemory),
            this.taskManager = [],
            this.installedPrograms = []
    }

    installAProgram(name, requiredSpace) {
        if (this.hddMemory - requiredSpace < 0) {
            throw Error("There is not enough space on the hard drive")
        }

        this.hddMemory -= Number(requiredSpace);
        let program = { "name": name, "requiredSpace": Number(requiredSpace) }
        this.installedPrograms.push(program)
        return program
    }

    uninstallAProgram(name) {
        let program = this.installedPrograms.find(x => x.name === name);

        if (!program) {
            throw Error("Control panel is not responding")
        }

        let space = program.space;
        this.hddMemory += space;
        this.installedPrograms.splice(this.installedPrograms.indexOf(program), 1)
        return this.installedPrograms
    }

    openAProgram(name) {
        let programFromInstalledPrograms = this.installedPrograms.find(x => x.name === name);
        let programFromTaskManager = this.taskManager.find(x => x.name === name);

        if (!programFromInstalledPrograms) {
            throw Error(`The ${name} is not recognized`)
        }
        if (programFromTaskManager) {
            throw Error(`The ${name} is already open`)
        }

        let ram = (programFromInstalledPrograms.requiredSpace / this.ramMemory) * 1.5;
        let cpu = ((programFromInstalledPrograms.requiredSpace / this.cpuGHz) / 500) * 1.5

        if (this._usedRam + ram >= 100) {
            throw Error(`${name} caused out of memory exception`)
        }

        if (this._usedCpu + cpu >= 100) {
            throw Error(`${name} caused out of cpu exception`)
        }

        this._usedRam += ram;
        this._usedCpu += cpu;

        let task = {
            "name": programFromInstalledPrograms.name,
            "ramUsage": ram,
            "cpuUsage": cpu
        }

        this.taskManager.push(task)
        return task;

    }

    taskManagerView() {
        if (this.taskManager.length === 0) {
            return "All running smooth so far";
        }

        let result = "";
        for (let process of this.taskManager) {
            result += `Name - ${process.name} | Usage - CPU: ${process.cpuUsage.toFixed(0)}%, RAM: ${process.ramUsage.toFixed(0)}%\n`
        }
        return result.trim()
    }
}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());

