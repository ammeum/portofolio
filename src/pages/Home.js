import bildeBilde from '../Images/1.jpg';

function Home () {
    return (
        <section className="sectionbox">
            <div>
            <img className="imagebox" src={bildeBilde} alt="Bilde av verdens søteste hund"/>
            </div>
            <div id="Homebox">
                 <h1>Anna Marita Meum</h1>
               <h2>Arbeidserfaring</h2>
               <ul>
                    <li>Noe</li>
                    <li>Noe annet</li>
                    <li>Noe mer</li>
                </ul> 
                <h2>Utdanning</h2>
                <ul>
                    <li>Skole</li>
                    <li>Annen skole</li>
                    <li>Mer skole</li>
                </ul>
            </div>
        </section>
    )
}
export default Home;