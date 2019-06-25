export function generateId(min=0,max=100000) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}