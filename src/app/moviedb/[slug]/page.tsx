import { MovieDBdata } from "../data"
export default function Page({ params }: { params: { slug: string } }) {
    let data = [];
    switch (params.slug) {
        case "movies":
            data = MovieDBdata.movies;
            break;
        case "movie":
            data = MovieDBdata.movie;
            break;
        case "search":
            data = MovieDBdata.search;
            break;

        default:
            throw new Error(`No page found: ${params.slug}`);
    }

    return (
        <main>
            <div className="container">
                <div className="nav">
                    <h3>Endpoints</h3>
                    
                </div>
                <div className="body">
                   <h2>{params.slug}</h2>
                </div>
            </div>
        </main>
    )
  }