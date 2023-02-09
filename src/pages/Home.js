import bildeBilde from '../Images/selfie.png';

function Home () {
    return (
        <section className="sectionbox">
            <div>
            <img className="imagebox" src={bildeBilde} alt="Bilde av verdens søteste hund"/>
            </div>
            <div id="Homebox">
                <h1>Anna Marita Meum</h1>
                <p class="profile">Trivelig og nysgjerrig nyutdannet med stor arbeidskapasitet. Trives godt med å få være kreativ og jobbe med visuelle ting. God kunnskap og stor interesse for Adobe creative cloud programmer. Grunnleggende god forståelse innenfor html, css, javascript og React. Under studiet interesserte jeg meg spesielt for grafisk design, 3D modellering, videoproduksjon og kommunikasjonsdesign.</p>
                <h2>Arbeidserfaring</h2>
                <ul>
                    <li>Studentassistent v/ Høgskolen i Østfold</li>
                    <p class="underli">Grafisk design og webutvikling</p>
                    <li>Dagligvarehandel</li>
                    <li>Pleiemedarbeider</li>
                </ul> 
                <h2>Utdanning</h2>
                <ul>
                    <li>Bachelor i digitale medier og design</li>
                    <li>Generell studiekompetanse</li>
                    <li>1 år design og håndverk</li>
                </ul>
            </div>
        </section>
    )
}
export default Home;