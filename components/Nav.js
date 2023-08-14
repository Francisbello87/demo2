"use client";
import Link from "next/link";
import React from "react";
import { searchIcon } from "./SVG";

const Nav = () => {
  return (
    <div className=" flex Nav items-center  justify-between w-full px-10 pt-10  ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="158"
        height="29"
        fill="none"
        viewBox="0 0 158 29"
      >
        <g
          fill="#fff"
          fillOpacity="0.4"
          fillRule="evenodd"
          clipPath="url(#clip0_275_219)"
          clipRule="evenodd"
        >
          <path d="M14.123.15C1.593 2.08-3.483 16.027 5.186 24.71c10.19 10.207 27.477.507 24.174-13.563C27.81 4.54 20.39-.815 14.123.15zm-1.09 6.3c0 .112-.113.632-.251 1.157-.138.524-.39 1.657-.562 2.519l-.31 1.565h-1.506c-1.24 0-1.477-.073-1.345-.417.088-.23.308-1.219.488-2.199.244-1.324.499-1.916.993-2.306.64-.503 2.497-.742 2.494-.32zm4.797.827c1.19 1.568-.462 4.414-2.562 4.414-.484 0-.118-3.02.62-5.103.153-.434 1.435.02 1.942.689zm5.812-.828c.023 1.169-2.334 5.242-3.034 5.242-.912 0-.905.057-.323-2.594.372-1.697.578-2.133 1.155-2.448.75-.408 2.195-.54 2.202-.2zM10.97 13.914c.226.325.348.692.27.817-.076.126.418.228 1.1.228.681 0 1.24.123 1.24.273 0 .15-.547.272-1.214.272-1.326 0-1.832.887-1.832 3.215 0 .502-.17 1.24-.379 1.64-.208.4-.38.932-.38 1.182-.004 1.081-.306 1.316-1.693 1.316H6.72l.19-1.266c.104-.696.289-1.462.41-1.702.123-.24.362-1.368.533-2.508.62-4.133 1.761-5.404 3.116-3.467zm5.716-.16c.235.235.427.602.427.816 0 .234.272.39.68.39.374 0 .68.122.68.272 0 .15-.353.272-.784.272-.858 0-1.391 1.292-1.391 3.373 0 .524-.123 1.028-.272 1.12-.15.093-.272.454-.272.803 0 1.035-.83 1.802-2.14 1.978l-1.183.159.198-1.198c.109-.658.316-1.422.46-1.697.144-.275.296-.949.338-1.498.041-.549.288-1.947.549-3.108l.473-2.11h.905c.498 0 1.097.192 1.332.427zm4.233.388c0 .8.029.817 1.376.817.847 0 1.31.105 1.207.273-.092.15-.72.272-1.394.272-1.04 0-1.204.072-1.081.477.235.78.27 3.489.048 3.848-.112.182-.346.908-.52 1.612l-.315 1.28-1.428.082c-.785.045-1.426-.016-1.425-.136.002-.384.558-2.378.82-2.942.14-.3.226-.728.192-.953-.242-1.629.977-5.447 1.738-5.447.688 0 .782.099.782.817zm-13.185 1.09c-.092.15-.405.272-.695.272-.29 0-.528-.123-.528-.272 0-.15.313-.273.696-.273.394 0 .623.118.527.273zM46.546 4.557c-1.103.712-1.426 2.283-.674 3.289l.154.206 1.813.014c1.394.01 1.835-.002 1.905-.052.084-.06.825-3.155.825-3.446 0-.189-.166-.206-1.968-.206h-1.752l-.303.195zm7.085-.11c-.042.046-.266.935-.499 1.974L52.71 8.31l-3.367.026c-3.654.028-3.613.024-3.428.296.058.085.289.092 3.363.104 3.095.013 3.3.019 3.298.103 0 .05-.158.787-.349 1.638l-.347 1.549-1.465.013c-1.261.012-1.464.004-1.464-.062 0-.042.138-.685.306-1.43.394-1.737.608-1.54-1.681-1.54h-1.804l-.078.116c-.043.064-.432 1.707-.864 3.65-.432 1.945-1.189 5.34-1.681 7.545-1.003 4.49-.925 4.084-.808 4.193.117.108 3.569.123 3.724.016.069-.047.193-.507.455-1.69l.897-4.051c.296-1.334.575-2.582.622-2.774l.083-.348h2.331l.196.159c.252.205.293.41.181.916l-.9 4.03c-.984 4.401-1.16 3.823 1.17 3.823 2.2 0 1.809.504 2.695-3.484.403-1.816 1.186-5.331 1.74-7.81.553-2.48 1.005-4.518 1.005-4.529 0-.011.666-.02 1.48-.02.813 0 1.478.007 1.478.016 0 .009-.113.52-.251 1.138-.334 1.487-.544 1.323 1.69 1.322 2.19-.001 1.913.157 2.233-1.267l.267-1.184 4.72-.013c3.916-.01 4.732-.001 4.784.057.869.968-1.004 3.155-2.684 3.134-.749-.01-.694.219-.33-1.39.39-1.728.606-1.526-1.652-1.543-2.233-.017-1.77-.752-3.002 4.765l-1.71 7.657-.673 3.017.128.096c.21.157 6.303.108 7.097-.057 5.453-1.137 8.027-6.75 4.871-10.621-.04-.048.002-.122.148-.262 1.068-1.026 1.756-2.57 1.816-4.078l.031-.787h1.583c1.229 0 1.583.014 1.584.064 0 .036-.107.547-.237 1.136-.272 1.227-.27 1.242.152 1.267 1.358.081 3.11-.95 3.817-2.248l.12-.22h4.715c2.593 0 4.714.007 4.714.014 0 .008-.36.745-.802 1.639l-.803 1.625-.76.014c-.698.013-.76.007-.758-.077.002-.05.137-.684.302-1.408.268-1.18.291-1.328.22-1.432l-.08-.116H88.95c-.99 0-1.833.022-1.876.046-.05.03-.38 1.4-.935 3.883l-1.695 7.586c-.91 4.076-.885 3.939-.729 4.016.166.083 3.584.072 3.7-.01.066-.048.352-1.247 1.047-4.374.527-2.37.97-4.35.985-4.4.042-.137 1.337-.137 1.38 0 .015.05.284 2.006.598 4.348.353 2.636.6 4.302.647 4.374l.076.116h1.941c1.574 0 1.962-.014 2.048-.072.104-.07.09-.196-.57-5.055l-.678-4.983 1.405-2.854 1.404-2.854 1.584-.013 1.583-.014-.032.117c-.634 2.36-.632 2.368.651 2.35l1.007-.014.596-1.213.595-1.213 1.844-.013 1.844-.014.02.693c.018.648.05.82.139.737.02-.018.054-.237.075-.486.04-.451.04-.45.048.232.007.57.022.683.092.683.071 0 .084-.12.084-.774 0-.62.015-.774.077-.774.081 0 .144.253.146.58 0 .107.025.194.056.194.035 0 .055.362.055.98 0 .59.022.981.054.981.029 0 .06.167.07.37.041.932.154.422.169-.766.018-1.5.17-1.796.197-.387.024 1.205.143 1.054.181-.227.019-.68.036-.86.055-.593.039.538.167.567.167.038 0-.24.024-.394.063-.406.034-.011.082-.112.105-.224.036-.173.044-.143.05.193.003.218.031.41.061.428.032.019.057.276.057.597 0 .467.014.564.083.564s.084-.094.084-.542c0-.298.025-.583.056-.632.031-.05.078-.24.105-.425.037-.26.05-.07.055.843.009 1.438.125 1.68.177.365.016-.423.035-.6.041-.394.009.28.034.384.096.406.052.018.084.097.084.209 0 .12.023.172.07.158.05-.016.077-.283.099-.998.016-.537.035-.89.042-.786.006.105.037.205.068.223.034.02.055.473.055 1.19 0 .995.012 1.158.084 1.158.07 0 .084-.1.084-.58 0-.32.019-.848.042-1.175l.042-.593.027.593c.041.864.134.751.17-.206.017-.44.036-.715.042-.61.006.105.037.205.067.223.032.017.057.18.057.36 0 .223.026.354.083.406.059.054.084.187.084.443 0 .29.017.364.083.364.071 0 .084-.12.084-.77 0-.459.023-.784.056-.803.031-.018.056-.147.056-.287 0-.14.025-.255.056-.255.03 0 .059-.11.062-.245l.007-.246.048.305c.074.468.217.47.217.002 0-.215.02-.28.084-.28.052 0 .084.048.084.125 0 .07.021.138.047.153.027.015.064.195.082.399.018.204.057.385.086.402.03.016.063.1.073.185.039.32.131.111.147-.336.018-.524.178-.719.18-.22.002.532.17.492.225-.052.02-.205.04-.297.045-.205.011.224.176.236.176.013 0-.085.025-.155.055-.155.031 0 .056-.036.056-.08 0-.045.025-.067.056-.05.03.018.055.09.055.159 0 .07.025.126.054.126.028 0 .06.11.069.245.009.135.042.245.073.245.03 0 .063-.11.072-.245.01-.135.042-.245.071-.245.029 0 .056-.076.06-.168.004-.092.029.04.055.292.026.253.059.47.072.482.077.071.146-.081.153-.338.006-.183.018-.23.032-.126.012.092.046.167.075.167.028 0 .052.035.052.078 0 .042.037.077.084.077.059 0 .083-.056.084-.193 0-.107.016-.281.035-.388l.035-.195.074.132c.04.073.081.323.09.556.022.58.121.538.159-.067.017-.27.036-.393.042-.274.02.409.16.368.228-.066.026-.168.051-.264.055-.214.003.05.031.09.063.09.03 0 .055.07.055.155 0 .085.022.155.049.155.027 0 .064.07.082.154.076.35.168.162.236-.477l.037-.348h8.117l.062.127c.621 1.26-1.134 3.117-2.95 3.123h-.422l.294-1.302c.316-1.397.336-1.533.233-1.628-.198-.183-3.84-.066-3.84.123 0 .013-.754 3.398-1.675 7.521-1.715 7.685-1.721 7.711-1.607 7.817.082.075 3.598.088 3.725.013.054-.032.399-1.474 1.064-4.45l.985-4.403h1.272l.59 4.368c.381 2.824.616 4.398.664 4.451.103.116 3.882.126 4.051.011.102-.069.086-.213-.566-5.038l-.671-4.967.68-.625c1.491-1.37 2.32-3.221 2.162-4.826l-.03-.315h5.058c2.782 0 5.059.018 5.059.04 0 .039-.175.822-1.652 7.443-1.013 4.534-1.08 4.644-2.845 4.644-1.254 0-1.26.497.059-5.402 1.522-6.81 1.404-6.247 1.333-6.351-.121-.178-3.765-.16-3.839.02-.035.084-2.216 9.781-2.355 10.469-.605 2.999 2.607 5.762 5.573 4.795.156-.052.242-.059.256-.023.072.202.126.208 1.956.208 1.328 0 1.795-.016 1.866-.065.097-.065.216-.584 2.749-11.96.445-2 .822-3.678.839-3.728.027-.085.233-.09 3.311-.09 3.593 0 3.505.007 3.361-.286l-.063-.127h-3.238c-2.553 0-3.238-.014-3.238-.065 0-.035.176-.85.391-1.81.414-1.852.428-1.94.324-2.037-.193-.178-3.84-.066-3.84.118 0 .03-.778 3.53-.815 3.666l-.034.128h-10.289l-.101-.349c-.43-1.495-1.746-2.816-3.327-3.34-.799-.265-1.048-.285-3.564-.285h-2.325l-.287.179c-1.112.692-1.451 2.296-.697 3.305l.153.206 2.705.026c2.734.026 3.067.051 3.067.233 0 .014-1.731.025-3.847.025h-3.846l-.037-.155c-.02-.085-.058-.155-.085-.155-.026 0-.056-.093-.065-.207-.023-.272-.124-.29-.147-.025-.01.113-.041.228-.07.255-.028.027-.054.109-.057.181-.005.119-.009.116-.057-.036-.029-.092-.077-.168-.107-.168s-.054-.053-.054-.119c0-.065-.023-.14-.052-.167-.028-.027-.06-.142-.07-.256-.009-.113-.043-.206-.073-.206-.031 0-.064.093-.074.206-.009.114-.041.229-.069.256-.029.027-.053.154-.053.284-.001.17-.016.213-.055.157a.406.406 0 01-.056-.194c0-.063-.024-.116-.053-.116-.029 0-.061-.133-.07-.296-.021-.38-.118-.364-.161.024-.018.164-.037.24-.044.17a.472.472 0 00-.093-.23.509.509 0 01-.082-.271c0-.179-.075-.229-.133-.09-.018.046-.037.26-.04.478-.004.218-.017.35-.031.293a1.225 1.225 0 00-.075-.207.923.923 0 01-.066-.202c-.041-.239-.156-.137-.156.138 0 .154-.019.297-.043.317a.832.832 0 00-.107.203c-.062.155-.065.157-.07.032-.002-.072-.027-.154-.055-.18a.351.351 0 01-.07-.168c-.027-.168-.127-.166-.148.002-.029.231-.122.162-.122-.09 0-.234-.081-.309-.155-.142-.023.053-.052-.068-.068-.297-.027-.378-.122-.526-.157-.245-.009.078-.041.142-.07.142-.028 0-.052.068-.052.15 0 .083-.029.16-.064.171-.036.011-.08.118-.098.238-.04.259-.132.305-.172.086-.042-.221-.136-.17-.164.09l-.022.22-.063-.31c-.067-.337-.148-.398-.205-.155-.028.123-.037.1-.042-.116-.004-.149-.031-.27-.061-.27-.031 0-.061-.25-.07-.577-.021-.795-.129-.814-.183-.032-.022.32-.062.607-.087.636-.025.03-.056.216-.067.413l-.019.36-.011-.4c-.006-.226-.035-.4-.067-.4s-.056-.154-.056-.359c0-.197-.023-.371-.05-.387-.028-.016-.069-.297-.091-.624-.053-.792-.16-.78-.182.019-.008.327-.039.576-.069.576-.032 0-.059.322-.066.787-.01.639-.015.685-.029.245-.008-.298-.039-.588-.068-.645-.028-.057-.062-.423-.075-.815-.015-.391-.041-.726-.061-.744-.082-.076-.111.082-.147.798-.024.49-.04.619-.046.361-.004-.22-.033-.4-.063-.4s-.061-.25-.069-.58c-.026-.935-.123-.681-.168.438-.046 1.14-.078 1.469-.09.93-.006-.206-.033-.375-.063-.375-.029 0-.061-.174-.069-.387-.03-.695-.128-.431-.144.387-.009.458-.038.774-.07.774-.029 0-.057.18-.062.4l-.008.4-.055-.4c-.029-.22-.076-.4-.103-.4-.027 0-.049-.174-.049-.387 0-.575-.163-.564-.179.013-.009.353-.015.331-.041-.19-.032-.603-.162-.903-.178-.408l-.007.224-.044-.232c-.025-.128-.047-.577-.05-.998-.004-.837-.126-1.106-.16-.353-.008.204-.04.37-.069.37-.03 0-.053.174-.053.387 0 .215-.025.387-.054.387-.032 0-.061.251-.071.58-.019.742-.211.945-.211.224 0-.708-.164-.534-.179.19l-.011.58-.031-.77c-.031-.81-.169-1.203-.169-.484 0 .205-.031.369-.082.436-.059.078-.086.289-.098.747l-.016.639-1.687.014c-.929.007-1.689 0-1.689-.018 0-.017.402-.85.893-1.852 1.135-2.314 1.157-2.092-.217-2.092-1.733 0-2.475.326-2.964 1.303-.128.257-.669 2.384-.669 2.632 0 .021-.682.039-1.514.039-1.415 0-1.512-.006-1.485-.09.016-.05.421-.885.9-1.856.945-1.915.91-1.83.783-1.947-.095-.087-3.88-.126-4.023-.041-.036.021-.493.909-1.016 1.973l-.952 1.935-4.74.013-4.74.013.085-.245c.6-1.697-.939-3.716-2.838-3.728-.248-.001-.287.11-.723 2.057l-.423 1.89-1.7.014-1.7.013-.128-.4c-.455-1.436-1.676-2.69-3.15-3.234-.85-.314-1.121-.339-3.697-.34h-2.347l-.248.145c-1.185.695-1.541 2.58-.653 3.453l.118.117H69.4c2.603.002 2.63.003 2.878.117l.251.115-4.46.013c-2.452.008-4.472.001-4.488-.014-.033-.03.003-.207.47-2.312.323-1.456.328-1.49.222-1.561-.153-.104-3.668-.11-3.761-.006-.047.052-.902 3.723-.902 3.872 0 .019-.666.034-1.48.034-.813 0-1.477-.018-1.476-.039 0-.021.187-.863.413-1.87.372-1.653.404-1.844.332-1.949l-.08-.116h-1.806c-1.605 0-1.814.01-1.882.085zm34.326.063c-1.172.7-1.522 2.332-.72 3.356l.166.212h1.802c1.985 0 2.718-.948 2.718-3.514 0-.184-.173-.202-1.967-.202h-1.751l-.248.148zm43.922.027c-1.057.717-1.413 1.971-.863 3.046.272.532.11.495 2.175.495 1.852 0 1.983-.014 1.983-.204 0-.023.163-.77.362-1.661.418-1.862.387-1.667.275-1.77-.075-.07-.324-.08-1.883-.08l-1.796.002-.253.172zm13.787-.003c-1.093.752-1.418 2.02-.806 3.138.242.443-.068.406 3.42.406 3.923 0 3.616-.142 3.251 1.503l-1.76 7.877c-.846 3.782-1.538 6.898-1.538 6.924 0 .026.039.084.087.129.117.108 3.568.123 3.726.016.072-.05.459-1.695 1.656-7.057.859-3.846 1.631-7.271 1.715-7.612.616-2.486-.652-4.659-3.12-5.35-.397-.11-.498-.115-3.395-.13l-2.985-.017-.251.173zm-.823 4.507c-.095.035-.083-.014-.964 3.94-.434 1.944-1.175 5.271-1.65 7.394-.926 4.154-.914 4.084-.753 4.163.116.058 3.498.078 3.654.023.118-.042.093.056.949-3.788.414-1.86 1.156-5.185 1.649-7.39.929-4.16.939-4.212.828-4.314-.066-.062-3.552-.089-3.713-.028zM58.609 13c-.04.045-.28 1.016-.536 2.159l-1.25 5.597c-.856 3.836-.832 3.704-.677 3.781.166.083 3.584.072 3.7-.01.066-.047.229-.682.573-2.233l1.092-4.895c.788-3.52.768-3.801-.304-4.332-.307-.152-2.471-.207-2.598-.066zm20.663-.01c-.032.037-.249.926-.482 1.976l-1.264 5.672c-1.016 4.553-1.19 3.953 1.15 3.953h1.803l.08-.116c.068-.1.642-2.61 1.937-8.476.442-1.998.333-2.495-.646-2.943-.285-.13-2.477-.187-2.578-.067zm20.687.015c-.038.043-.268.966-.51 2.051-2.293 10.256-2.117 9.399-1.949 9.481.166.083 3.583.072 3.7-.01.065-.047.292-.973.814-3.321l.724-3.256-.331-2.443c-.182-1.344-.358-2.474-.392-2.511-.095-.106-1.961-.097-2.056.009zM71.17 15.771c2.142.516 1.524 3.7-.93 4.793-.742.331-2.595.537-2.595.289 0-.041.251-1.195.558-2.565.307-1.37.558-2.508.558-2.53 0-.093 2.013-.082 2.41.013z"></path>
        </g>
        <defs>
          <clipPath id="clip0_275_219">
            <path
              fill="#fff"
              d="M0 0H156.271V28.91H0z"
              transform="translate(.864 .037)"
            ></path>
          </clipPath>
        </defs>
      </svg>
      <div className=" flex items-center gap-11">
        <Link href={""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
            viewBox="0 0 25 25"
          >
            <path
              stroke="#606060"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M22.08 22.946l-2-2m-8.5 1a9.5 9.5 0 100-19.002 9.5 9.5 0 000 19.002z"
            ></path>
          </svg>
        </Link>
        <Link className="relative" href={""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="28"
            fill="none"
            viewBox="0 0 27 28"
          >
            <path
              stroke="#606060"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M1.58 1.446h2.175a2.313 2.313 0 012.3 2.5l-1.037 12.45a3.495 3.495 0 003.487 3.787h13.313c1.8 0 3.375-1.475 3.512-3.262l.675-9.375c.15-2.075-1.425-3.763-3.512-3.763H6.355m3.975 5.163h15m-5.937 17.5a1.562 1.562 0 100-3.125 1.562 1.562 0 000 3.125zm-10 0a1.563 1.563 0 100-3.125 1.563 1.563 0 000 3.125z"
            ></path>
          </svg>
          <div className=" bg-[#1DEBF9] w-[.4938rem] h-[7.9008px] rounded-full absolute top-0 right-0"></div>
        </Link>
        <Link href={""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            fill="none"
            viewBox="0 0 31 31"
          >
            <path
              stroke="#606060"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M3.83 9.696h22.5m-22.5 6.25h22.5m-22.5 6.25h22.5"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
