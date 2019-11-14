class Company {

    constructor() {
        this.departments = []
    }

    addEmployee(username, salary, position, department) {
        if (!username || !salary || !position || !department) {
            throw Error("Invalid input!")
        }
        if (Number(salary) < 0) {
            throw Error("Invalid input!")
        }

        let employee = {
            username: username,
            salary: salary,
            position: position,
            department: department
        }
        this.departments.push(employee)

        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment() {
        let ordered = Object.values(this.departments.reduce((result, {
            username,
            salary,
            position,
            department }) => {
            // Create new group
            if (!result[department]) {
                result[department] = {
                    department,
                    users: [],
                    totalSalary: 0
                };
            }
            // Append to group
            result[department].users.push({
                username,
                salary,
                position
            })
            result[department].totalSalary += Number(salary)
            result[department].users.sort((a, b) => {
                return (b.salary - a.salary || a.username.localeCompare(b.username))
            })
            return result;
        }, []))
            .sort((a, b) => {
                return b.totalSalary / b.users.length - a.totalSalary / a.users.length
            })


        let result = "";
        for (const dep of ordered) {
            result += `Best Department is: ${dep.department}\n`
            result += `Average salary: ${(dep.totalSalary / dep.users.length).toFixed(2)}\n`
            for (const user of dep.users) {
                result += `${user.username} ${user.salary} ${user.position}\n`
            }
            break;
        }

        return result.trim()
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

