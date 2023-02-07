import React from "react";
import ReactDOM from "react-dom";

// keep a list of the icon ids we put in the symbol


// then define an Icon component that references the 
const Icon = ({ id, size, width = 24, height = 24, className = '' }) => {

  const url = 'https://willianjusten.com.br/assets/img/react-svg/sprite.svg';

  return (
    <>
        <svg viewBox='0 0 16 16' className={`icon icon-globe`}>
            <use xlinkHref={`${url}#icon-globe`} />
          </svg>
    <svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
      <symbol id="icon-lamp" viewBox="0 0 57 64">
      <title>lamp</title>
      <path fill="#6bc9ca" class="path1 fill-color1" d="M24.459 55.575c0.634 0.136 1.268 0.226 1.902 0.272 1.314 0.136 2.627 0.136 3.895 0 0.634-0.045 1.268-0.181 1.902-0.272 0.453-0.091 0.951-0.226 1.404-0.362v-3.941c-1.676 0.453-3.442 0.679-5.254 0.679s-3.578-0.226-5.254-0.679v3.941c0.453 0.136 0.906 0.272 1.404 0.362z"></path>
      <path fill="#6bc9ca" class="path2 fill-color1" d="M32.43 56.753c-0.679 0.136-1.359 0.226-2.038 0.317s-1.404 0.091-2.084 0.091c-0.679 0-1.404-0.045-2.084-0.091-0.679-0.091-1.359-0.181-2.038-0.317-0.408-0.091-0.77-0.181-1.132-0.272v0.498c0 2.355 1.631 4.303 3.805 4.801-0.045 0.136-0.045 0.226-0.045 0.362 0 0.815 0.679 1.495 1.495 1.495s1.495-0.679 1.495-1.495c0-0.136 0-0.272-0.045-0.362 2.174-0.498 3.805-2.446 3.805-4.801v-0.498c-0.362 0.136-0.77 0.226-1.132 0.272z"></path>
      <path fill="#f05550" class="path3 fill-color2" d="M20.246 31.117c-1.631 0-2.944 1.314-2.944 2.944s1.314 2.944 2.944 2.944h2.944v-2.944c0.045-1.631-1.314-2.944-2.944-2.944z"></path>
      <path fill="#f05550" class="path4 fill-color2" d="M36.371 31.117c-1.631 0-2.944 1.314-2.944 2.944v2.944h2.944c1.631 0 2.944-1.313 2.944-2.944s-1.313-2.944-2.944-2.944z"></path>
      <path fill="#6bc9ca" class="path5 fill-color1" d="M28.309 7.428c-0.317 0-0.589-0.272-0.589-0.589v-5.39c0-0.317 0.272-0.589 0.589-0.589s0.589 0.272 0.589 0.589v5.39c0 0.317-0.272 0.589-0.589 0.589z"></path>
      <path fill="#6bc9ca" class="path6 fill-color1" d="M44.569 14.358c-0.136 0-0.317-0.045-0.408-0.181-0.226-0.226-0.226-0.634 0-0.861l3.805-3.805c0.226-0.226 0.634-0.226 0.861 0s0.226 0.634 0 0.861l-3.805 3.805c-0.136 0.136-0.272 0.181-0.453 0.181z"></path>
      <path fill="#6bc9ca" class="path7 fill-color1" d="M12.048 14.358c-0.136 0-0.317-0.045-0.408-0.181l-3.805-3.805c-0.226-0.226-0.226-0.634 0-0.861s0.634-0.226 0.861 0l3.805 3.805c0.226 0.226 0.226 0.634 0 0.861-0.136 0.136-0.317 0.181-0.453 0.181z"></path>
      <path fill="#f05550" class="path8 fill-color2" d="M36.371 38.228h-2.944v11.822c0 0 0 0 0 0 8.108-2.219 14.041-9.648 14.041-18.48 0-10.553-8.606-19.159-19.159-19.159s-19.159 8.606-19.159 19.159c0 10.553 8.606 19.159 19.159 19.159 1.359 0 2.672-0.136 3.986-0.408-0.045-0.091-0.091-0.181-0.091-0.272v-11.822h-7.791v6.839c0 0.317-0.272 0.589-0.589 0.589s-0.589-0.272-0.589-0.589v-6.839h-2.944c-2.31 0-4.167-1.857-4.167-4.167s1.857-4.167 4.167-4.167 4.167 1.857 4.167 4.167v2.944h7.791v-2.944c0-2.31 1.857-4.167 4.167-4.167s4.167 1.857 4.167 4.167c-0.045 2.31-1.902 4.167-4.212 4.167zM28.309 15.943c-8.651 0-15.672 7.021-15.672 15.672 0 0.317-0.272 0.589-0.589 0.589s-0.589-0.272-0.589-0.589c0-9.331 7.564-16.895 16.895-16.895 0.317 0 0.589 0.272 0.589 0.589s-0.317 0.634-0.634 0.634z"></path>
      </symbol>
      </svg>
    </>

  );
}


export default Icon;

// In your App, you can now render the icons
// function App() {
//   return (
//     <div className="App">
//       {icons.map((id) => {
//         return <Icon key={id} id={id} />;
//       })}
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// import React from 'react';
// import iconsPath from './icons.svg';
// import './Icon.scss';

// interface IconProps {
//   id: 'exportsquare';
//   size?: number;
//   width?: number;
//   height?: number;
//   className?: string;
// }

// const Icon = ({ id, size, width = 24, height = 24, className = '' }: IconProps) => {
//   return (
//     <svg
//       className={`icon ${className}`}
//       width={size ?? width}
//       height={size ?? height}
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <use className="icon__use" xlinkHref={`${iconsPath}#${id}`} />
//     </svg>
//   );
// };

// export default Icon;
