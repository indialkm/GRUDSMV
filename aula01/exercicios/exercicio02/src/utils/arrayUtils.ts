// Função que remove valores duplicados de um array
export const unique = (arr: number[]): number[] => [...new Set(arr)];

// Função que agrupa objetos por uma chave
export const groupBy = <T>(arr: T[], key: keyof T): Record<string, T[]> =>
    arr.reduce((acc, obj) => {
      const groupKey = String(obj[key]);  // Converte explicitamente para string
      (acc[groupKey] = acc[groupKey] || []).push(obj);
      return acc;
    }, {} as Record<string, T[]>);

// Função que soma os valores de uma chave específica
export const sumBy = <T>(arr: T[], key: keyof T): number =>
    arr.reduce((total, obj) => {
        const value = obj[key];
        return total + (typeof value === 'number' ? value : 0);
      }, 0);