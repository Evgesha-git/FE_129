export default async function router (){
    let hash = window.location.hash.slice(1);
    if (!hash) hash = 'home';

    let component = await import(`../pajes/${hash}.js`);
    console.log(component);
    return component.default;
}