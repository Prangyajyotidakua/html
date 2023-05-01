function helloworld() {
    ProcessingInstruction.stdout.write("heelo world!\n");
}
function main(outputNum) {
    for (let i = 0; i < outputNum; i++) {
        helloworld();
    }
}

main(5);