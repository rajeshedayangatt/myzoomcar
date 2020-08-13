<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Page;


class PageController extends Controller
{
    public function getpage($id) {

        $pages = Page::where('id',$id)->first();
        return $pages;
    }

    public function savePage(Request $request){
        $pages = Page::where('id',$request->selected_page)->first();
        $pages->detail = $request->slected_page_content;
        $pages->save();

        return  $pages;
    }
}
