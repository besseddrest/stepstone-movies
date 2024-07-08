export default function SearchResults({ list = [] }) {
    return (
        <section>
            <div className="search-result__container">
                <div className="search-result__item">
                    <h2>FooBar Movie Title</h2>
                    <ul>
                        {list.length > 0 && list.map(item => <li key={`item-${item.id}`}>{item.title}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}
