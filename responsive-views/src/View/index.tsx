import React from 'react';
import './View.css'; // Importa o arquivo CSS com as media queries

// Define os tipos para as props do componente com propriedades readonly
interface ViewProps {
  readonly $view: ('desktop' | 'mobile' | 'tablet')[];
  readonly children: React.ReactNode;
}

/**
 * `View` é um componente que exibe conteúdo condicionalmente com base em parâmetros de visualização.
 * Ele usa classes CSS e media queries para mostrar ou ocultar o conteúdo em diferentes tamanhos de tela.
 * 
 * @param {ViewProps} props - Propriedades do componente View.
 * 
 * @returns {JSX.Element} Um contêiner `div` que exibe conteúdo condicionalmente com base na prop `$view`.
 */
function View({ children, $view }: ViewProps) {
  // Construa a classe baseada na combinação de visões
  const className = `view ${$view.join(' ')}`;

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default View;
