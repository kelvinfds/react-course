export const Challenge = () => {
    const a = 2;
    const b = 14;

    const SumValues = () => {
        console.log('O resultado da soma é igual a', a+b);
    }
    return (
        <div>
            <h1> Desafio 2</h1>
            <p>O valor de A é igual a {a}</p>
            <p>O valor de B é igual a {b}</p>
            <div>
                <button onClick={SumValues}>Somar</button>
            </div>
        </div>
    );
};