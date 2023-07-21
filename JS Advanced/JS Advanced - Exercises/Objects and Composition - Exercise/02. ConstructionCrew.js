function workerInfo(worker) {
    if (worker.dizziness) {
        let mlWaterNeeded = worker.weight * 0.1 * worker.experience;
        worker.levelOfHydrated += mlWaterNeeded;
        worker.dizziness = false;
    }
    return worker;
}
workerInfo({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
);