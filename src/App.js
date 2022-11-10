import './App.css'
import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';//Pra salvar a imagem

function App() {

  const [link, setLink] = useState('')
  const [qrcodelink,setQrcodelink] =useState('')

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width:600,
      margin:3,
    }, function(err,url){ //Calback de generate
      setQrcodelink(url)
    })
  }

  function handleQrcode(e){
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }
  return (
    <div className="App">
      <div className="container">
        <QRCode
          value={link}
        />

        <input className="input" placeholder="Digite algo" value={link} onChange={(e) => handleQrcode(e)} />
      
      <a href={qrcodelink} download={`qrcode.png`}>Baixar QRCode</a>
      </div>
    </div>
  );
}

export default App;
