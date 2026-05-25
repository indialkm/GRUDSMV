interface Roupa{
    nome: string;
    preco: number;
    tipo:string;
}

// Aqui assim como no array utilizamos export para pode importar esse método em outros arquivos, além disso aqui usamos o generic T, como o TS é tipavel é necessário passar um tipo, mas nesse caso podemos varios, uma vez que uma lista pode ter tipos diferentes. Assim, continuamos com o set que vai receber essa array que pode ser uma String ou um numero, e é ele que vai selecionar somente um unico item com mesmo valor. 
export const unique = <T>
(arr: T[]): T[] => [...new Set(arr)];


//No groupBy nós selecinamos a interface de roupas já com nome, preco e tipo e usamos o KeyOf para avisar para o TS que o tipo da key está dentro deda interface Roupa. Usamos o reduce para 
export const groupBy = (arr: Roupa[], key: keyof Roupa) => {
  return arr.reduce((acc, obj) => {
    const valorDaChave = obj[key] as string; 
    
    (acc[valorDaChave] = acc[valorDaChave] || []).push(obj);
    
    return acc;
  }, {} as Record<string, Roupa[]>); 
};

export const sumBy = (arr: Roupa[], key: keyof Roupa) => 
  arr.reduce((acumulador, obj) => acumulador + (Number(obj[key]) ?? 0), 0);


