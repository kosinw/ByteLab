export default () => {
    // eslint-disable-next-line no-restricted-globals
    self.addEventListener("message", e => {
        
        const { code, ctx } = e.data;

        console.log(code);

        // execute code here

        postMessage(true);
    });
};