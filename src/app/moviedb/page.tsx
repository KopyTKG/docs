export default function MovieDB() {
    const endpoints = [
        {
            name: "/movies",
            type: "GET",
            req: "API auth key (Bearer key)",
            res: ""
        },
        {
            name: "/movies",
            type: "POST",
            req: "",
            res: ""
        },
        {
            name: "/movies",
            type: "PUT",
            req: "",
            res: ""
        },
        {
            name: "/movies",
            type: "DELETE",
            req: "",
            res: ""
        },
        {
            name: "/movies",
            type: "PATCH",
            req: "",
            res: ""
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
                    <div className="endpoint" key={key}>
                        <div className="endpoint-head">
                            <div className="endpoint-title">
                                {endpoint.name}
                            </div>
                            <div className={`endpoint-type ${endpoint.type}`}>
                                {endpoint.type} 
                            </div>
                        </div>
                        <div className="endpoint-body">
                            <div className="endpoint-req">
                                req: {endpoint.req}
                            </div>
                            <div className="endpoint-res">
                                {endpoint.res}
                            </div>
                        </div>
                    </div>
                ))
            }
            </section>
        </main>
    )
}