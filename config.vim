let s:acronyms = { 
      \'IDE': 'Integrated Development Environment' ,
      \'HTML': 'HT Mark-up Language',
      \'HT': 'Hyper Text ',
      \'CSS': 'Cascading Style Sheets',
      \'http': 'Hyper Text Transfer Protocol',
      \'href': 'Hyper Text Reference',
      \}

function! config#expand()
  let l:acro = expand('<cword>')
  let l:expanded = get(s:acronyms, l:acro)
  if !empty(l:expanded)
    execute "normal! ciw".l:expanded."\<ESC>"
  endif
	echo 'yes'
endfunction

noremap <c-c> <esc>:call config#expand()<CR>
inoremap <c-b> <esc>:call emmet#expandAbbr(3, '')<CR>

set nowrap
set complete+=k./completion.vim
set iskeyword+=-
autocmd FileType html set omnifunc=csscomplete#CompleteCSS
abbr anc <a id="end">SIGNED IN BLOOD:_________________</a>
let @l="I<li>\<esc>A</li>\<esc>"
let @p="I<p>\<esc>A</p>\<esc>"
let @h="^\"adiwxi<\<esc>\"apa>\<esc>A</\<esc>\"apa>\<esc>"
hi LineNr ctermfg=241
hi Visual ctermfg=yellow ctermbg=black

abbr fresh 
      \<p>Now this is a story all about how</p><CR>
      \<p>My life got flipped-turned upside down</p><CR>
      \<p>And I'd like to take a minute</p><CR>
      \<p>Just sit right there I'll tell you how I became</p><CR>
			\<p>the prince of a town called Bel-Air</p>
