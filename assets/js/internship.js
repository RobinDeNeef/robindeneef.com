$(function () {
	$.getJSON('https://dl.dropboxusercontent.com/s/ysrdarj686xc8wx/articles.json?dl=0', function (response) {
    var articlelist = response.items
		renderHTML(articlelist)
  })
})

function renderHTML(articlelist){
  $.each(articlelist, function(i, item){
    console.log(item.title);
		$( ".grid-container" ).append(renderArticleCardHTML(item));
  })
}

function renderArticleCardHTML(article){
   return [
		 				`<div class="grid-col">
							<img src="`,article.img,`" alt="">
							<div class='body-content'>
								<h3>`,article.title,`</h3>
								<p>`, article.desc,`</p>
								<a href="`,article.link,`" class="round-btn"><i class="fab fa-readme"></i></a>
							</div>
						</div>`
          ].join('');
}
