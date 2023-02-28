function supportsWorkerType() {
    let supports = false
    const tester = {
        get type() {supports = true}
    }

    try {
        new Workter('blob://', tester).terminate()
    }finally {
        return supports
    }
}

export {
    supportsWorkerType
}

//util para rodar em sistemas que nao tem a função type ja bem difundidos, como o firefox por exemplo