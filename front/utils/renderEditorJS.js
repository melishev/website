/*
  eslint-disable react/no-danger,
  jsx-a11y/label-has-associated-control,
  react/destructuring-assignment
*/

import { useState } from 'react';
import { MaskImage } from 'components/utils';
import Mask2x1 from 'assets/svg/mask2x1.svg';

// Данный модуль предназначен для преобразования данных из Editor.js в HTML
// Модуль не должен как либо стилизовать компоненты! Его основная задача -
// преобразовать данные в SEO-FRENDLY HTML и вывести все возможные парам -
// етры модулей через атрибуты, что бы дать возможность для дальнейшего
// рендера.

// Функция определяет уровень заголовка
function RenderHeading(block) {
  switch (block.data.level) {
    case 1:
      return <h1 key={block.id} className="editor-h1" dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    case 2:
      return <h2 key={block.id} className="editor-h2" dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    case 3:
      return <h3 key={block.id} className="editor-h3" dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    case 4:
      return <h4 key={block.id} className="editor-h4" dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    case 5:
      return <h5 key={block.id} className="editor-h5" dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    case 6:
      return <h6 key={block.id} className="editor-h6" dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    default:
      return <p key={block.id} className="editor-error">Error</p>;
  }
}

// Функция рендерит обычный текст
function RenderParagraph(block) {
  return <p key={block.id} className="editor-paragraph" dangerouslySetInnerHTML={{ __html: block.data.text }} />;
}

// Функция определяет стиль списка
function RenderList(block) {
  switch (block.data.style) {
    case 'ordered':
      return (
        <ol key={block.id} className="editor-list">
          {block.data.items.map((item) => (
            <li key={block.id + item[0]}>
              <p dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ol>
      );
    case 'unordered':
      return (
        <ul key={block.id} className="editor-list" style={{ listStyle: 'disc' }}>
          {block.data.items.map((item) => (
            <li key={block.id + item[0]}>
              <p dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      );
    default:
      return <p key={block.id} className="editor-error">Error</p>;
  }
}

// Функция рендерит разделитеель текста
function RenderDelimiter(block) {
  return <hr key={block.id} className="editor-delimiter" />;
}

// Функиця рендера Open Graph
function RenderLink(block) {
  return (
    <a key={block.id} className="editor-link" href={block.data.link}>
      <div className="editor-link-image">
        <Mask2x1 style={{ backgroundImage: `url(${block.data.meta.image.url})` }} />
      </div>
      <div className="editor-link-text">
        <h6>{block.data.meta.title}</h6>
        <p>{block.data.meta.description}</p>
        <small>{block.data.link.match(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g)[0]}</small>
      </div>
    </a>
  );
}

// Функция рендерит встройку кода
function RenderCode(block) {
  return (
    <pre key={block.id} className="editor-code">
      <p><code>{block.data.code}</code></p>
    </pre>
  );
}

// Функция рендерит цитату
function RenderQuote(block) {
  return (
    <figure key={block.id} className="editor-quote" style={{ textAlign: block.data.alignment }}>
      <p>
        <q dangerouslySetInnerHTML={{ __html: block.data.text }} />
        <cite dangerouslySetInnerHTML={{ __html: block.data.caption }} />
      </p>
    </figure>
  );
}

// Функция определяет есть ли у таблицы заголовок
function RenderTable(block) {
  const [data] = useState(block.data.content);
  const [heading] = useState(data.shift());

  switch (block.data.withHeadings) {
    case true:
      return (
        <table key={block.id} className="editor-table">
          <thead>
            <tr>
              {heading.map((item) => (
                <td key={block.id + item}>
                  <p dangerouslySetInnerHTML={{ __html: item }} />
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={block.id + row}>
                {row.map((item) => (
                  <td key={block.id + item}>
                    <p dangerouslySetInnerHTML={{ __html: item }} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    case false:
      return (
        <table key={block.id} className="editor-table">
          <tbody>
            {block.data.content.map((row) => (
              <tr key={block.id + row}>
                {row.map((item) => (
                  <td key={block.id + item}>
                    <p dangerouslySetInnerHTML={{ __html: item }} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    default:
      return <p key={block.id} className="editor-error">Error</p>;
  }
}

// Функция рендера изображения
function RenderImage(block) {
  return (
    <figure key={block.id} className="editor-image" data-border={block.data.withBorder} data-stretched={block.data.stretched} data-background={block.data.withBackground}>
      <MaskImage mask="2x1" src={block.data.file.url} alt={block.data.file.alternativeText} />
      <figcaption><small>{block.data.caption}</small></figcaption>
    </figure>
  );
}

// Функция рендерит список CheckBox
function RenderChecklist(block) {
  return (
    <div key={block.id} className="editor-checklist">
      {block.data.items.map((item) => (
        <label key={block.id + item.text}>
          <input type="checkbox" readOnly checked={item.checked} />
          <p dangerouslySetInnerHTML={{ __html: item.text }} />
        </label>
      ))}
    </div>
  );
}

// Функция встраивает HTML
function RenderRaw(block) {
  return <div key={block.id} className="editor-raw" dangerouslySetInnerHTML={{ __html: block.data.html }} />;
}

// Функция рендерит сообщение
function RenderWarning(block) {
  return (
    <div className="editor-warning" key={block.id}>
      <h5 dangerouslySetInnerHTML={{ __html: block.data.title }} />
      <p dangerouslySetInnerHTML={{ __html: block.data.message }} />
    </div>
  );
}

// Главная функция
function RenderText(block) {
  switch (block.type) {
    case 'header':
      return RenderHeading(block);
    case 'paragraph':
      return RenderParagraph(block);
    case 'list':
      return RenderList(block);
    case 'delimiter':
      return RenderDelimiter(block);
    case 'link':
      return RenderLink(block);
    case 'code':
      return RenderCode(block);
    case 'quote':
      return RenderQuote(block);
    case 'table':
      return RenderTable(block);
    case 'image':
      return RenderImage(block);
    case 'checklist':
      return RenderChecklist(block);
    case 'raw':
      return RenderRaw(block);
    case 'warning':
      return RenderWarning(block);
    default:
      return <p key={block.id} className="editor-error">Error</p>;
  }
}

export default RenderText;
