(()=>{
    
    const $doc = document;//documentの取得・・WebページのDOM（WEBページを構成する要素）を取得
    const $tab = document.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');

    const init =()=>{
        $content[0].style.display = 'block';
    };
init();

//クリックしたら起こるイベント
const handleClick = function(e){
    //1 イベントを一回スキップ
    e.preventDefault();
    
    //2　クリックされたnavとdataの情報を取得
    const $this = e.target
    const targetValue = $this.dataset.nav;

    //３　content一旦全てリセット（非表示にする）
    let index = 0;
    while(index < $nav.length){
        $content[index].style.display = 'none';
        $nav[index].classList.remove('is-active');
        index++;
    }
    //確認のログ
    console.log('Clicked!',targetValue);
    
    //４　対象のコンテンツをアクティブにする。
    $tab.querySelectorAll('[data-content="' +targetValue+ '"]')[0].style.display = 'block';
    $nav[targetValue].classList.add('is-active');
};
let index = 0;
while(index < $nav.length){
    $nav[index].addEventListener('click',handleClick);
    index++;
}



})();
