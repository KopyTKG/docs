export default function MovieDB() {
    const endpoints = [
        {
            name: "/movies",
            type: "POST",
            body: "Endpoint used for data query with pagging."
        },
        {
            name: "/movie",
            type: "POST",
            body: "Endpoint used for query of specific movie by id. (ID are same as TMBD)"
        },
        {
            name: "/search",
            type: "POST",
            body: "Real-time endpoint used for search in database to return movies with name containing search."
        }
    ]

    return (
        <main>
            <h1>MovieDB</h1>
            <div className="line"/>
            <p>
                Basic documentation for MovieDB project and it`s internal API endpoints. All enpoints all directly linked with prisma and database. To access any API endpoint it is required for you tu have <span className="highlight">API Auth key (Bearer key)</span>. All endpoints are located at <span className="highlight">https://movies.thekrew.app/api/*</span>
            </p>
            <div className="line"/>
            <h3>API endpoints</h3>
            <section>
            {
                endpoints.map((endpoint,key) => (
                    <a href={`/moviedb/${endpoint.name}`} key={key}>
                        <div className="endpoint">
                            <div className="endpoint-head">
                                <div className="endpoint-title">
                                    {endpoint.name}
                                </div>
                                <div className={`endpoint-type ${endpoint.type}`}>
                                    {endpoint.type} 
                                </div>
                            </div>
                            <div className="endpoint-body">
                                {endpoint.body}
                            </div>
                        </div>
                    </a>
                ))
            }
            </section>
        </main>
    )
}