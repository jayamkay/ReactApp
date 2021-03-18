// Ctrl+A - выделить весь код
// Ctrl+K +F - выровнять код
// Ctrl+K+C/Ctrl+K+U - Comment Code (весь блок)
import './App.css'; /* ./  - подключение файла из той же папки, где находится и этот файл (папка общая)*/ 

const App = () => {
  {/* вместо ключевого слова var в js теперь ипользуется let и const https://www.w3schools.com/js/js_variables.asp */ }
  return (  /* объясленной переменной App присвоена стрелочная функция */
    <div> First div
      <div className="App">  {/* css-класс обозначается словом className, так как слово class зарезервировано JS */}
        <ul>                 {/* Функция не может возвражать несколько элементов подряд, тэги нужно встроить внутрь основного элемента*/}
          <li>css</li>
          <li>html</li>
          <li>js</li>
          <li>react</li>
        </ul>
      </div>
      <NewComponent />  {/* Вставка одной компоненты в другую под видом тэга */} 
    </div>
  );
}


const NewComponent = () => {
  return <div>
    <h4>New Component</h4>
  </div>
}

export default App;
