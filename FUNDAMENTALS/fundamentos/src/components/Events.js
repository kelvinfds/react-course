export const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('clicou!')}>Clique Aqui Também</button>
            </div>
        </div>
    );
};
