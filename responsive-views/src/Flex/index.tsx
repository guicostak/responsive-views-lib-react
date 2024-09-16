import React from 'react';

// Define os tipos para as props do componente Flex, com propriedades readonly
interface FlexProps {
  readonly children: React.ReactNode;
  readonly $direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  readonly $align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  readonly $justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  readonly $width?: string | number;
  readonly $height?: string | number;
  readonly $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

/**
 * `Flex` é um componente de layout flexível que utiliza a propriedade CSS `display: flex`.
 * Ele permite configurar a direção, alinhamento, justificação, e outros estilos de layout flexível para o seu conteúdo.
 * 
 * @param {FlexProps} props - Propriedades do componente Flex.
 * 
 * @returns {JSX.Element} Um contêiner `div` com estilo flexível aplicável.
 */
function Flex({
  children,
  $direction,
  $align = 'center', // Valor padrão é 'center'
  $justify = 'center', // Valor padrão é 'center'
  $width = '100%', // Valor padrão é '100%'
  $height = '100%', // Valor padrão é '100%'
  $wrap = 'nowrap' // Valor padrão é 'nowrap'
}: FlexProps) {
  // Definindo estilos para o contêiner flexível
  const styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: $direction,
    alignItems: $align,
    justifyContent: $justify,
    flexWrap: $wrap,
    width: $width,
    height: $height,
  };

  return (
    <div style={styles}>
      {children}
    </div>
  );
}

export default Flex;
