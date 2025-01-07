import Image from "next/image";
import React from "react";

export default function Home() {

	return (
		<div className="flex items-center justify-center bg-gray-100 w-full h-screen">
			
			<div className="flex flex-col  items-center  w-[752] h-[480] bg-white shadow-lg p-4 justify-evenly" >
			
				<div className="flex text-5xl mt-8 block justify-center">Next 練習ページ</div>
				<form action="" className="">
					<div className="flex flex-col items-center justify-center w-[580] h-[80]">
						<input type="email" className="pl-4 w-[470] h-[38] border-gray-600 border-2 border-solid rounded-lg"/>
					</div>
					<div className="flex flex-row items-center justify-center w-[580] h-[80]">
						<input type="password" className="pl-4 w-[470] h-[38] border-gray-600 border-2 border-solid rounded-lg"/>
					</div>
					<div className="block pl-[72] text-blue-600">
					パスワードをお忘れの方はこちらをクリック
					</div>
				</form>
				<button className="w-[160] h-[32] border-gray-600 border-2 border-solid rounded-lg bg-gray-200">
					<a href="/project/schedule">
						ログイン
					</a>
				</button>
			</div>

		</div>
	);
}
