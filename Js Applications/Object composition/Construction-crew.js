function solve(obj) {
    if (obj.dizziness) {
        obj.levelOfHydrated += obj.weight * obj.experience / 10
        obj.dizziness = false;
        return obj
    }

    return obj;
}


console.log(solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}

))