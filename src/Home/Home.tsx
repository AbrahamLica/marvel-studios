import React, { useEffect, useState } from "react";
import * as C from "../AppStyles";

const Home = () => {
  const [requisicao, setRequisicao] = useState<string[]>([]);
  const [offSet, setOffSet] = useState<number>(0);

  const Hash = "4a8b729d09d1d2ad3fb626dff7e2165d";
  const publicKey = "8df0db429915d47e065eb03b37ca9039";

  const [url, setUrl] = useState(
    `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${Hash}&limit=100&offset=${offSet}`
  );

  // https://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860/portrait_incredible.jpg
  
  useEffect(() => {
    executarRequisicao();
  }, [offSet, url]);

  async function executarRequisicao() {
    let req = await fetch(url);
    let json = await req.json();
    setRequisicao(json.data.results);
    setUrl(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${Hash}&limit=100&offset=${offSet}`)
  }

 async function NextPage() {
    setOffSet(valor_antigo => valor_antigo + 100)
    executarRequisicao()
  }

  function teste2() {
    console.log(offSet)
  }

  return (
    <C.MainContainer>

      <C.ContainerCards>
        {requisicao.map((item, index) => (
          <C.ContainerCard>
            <p>{item.name}</p>
          </C.ContainerCard>
        ))}
      </C.ContainerCards>

      <button onClick={NextPage}>Next Page</button>

      <button onClick={teste2}>teste2</button>
    </C.MainContainer>
  );
};

export default Home;