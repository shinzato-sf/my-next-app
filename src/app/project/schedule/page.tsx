import Image from "next/image";
import "@/app/globals.css"

export default function Home() {

	return (
		<div className="flex items-center justify-center bg-gray-100 w-full h-screen">
			<div className="flex flex-col items-center justify-center w-[1600] h-[800] bg-white shadow-lg p-4 justify-evenly">
				{/* ガントチャート */}
				<div className="flex items-center flex-col w-5/6 h-[320]" >
					<div className="flex w-full h-[60]">
						<h2 className="flex items-center text-2xl w-[450]">ガントチャート</h2>
						<div className="flex items-center w-1/2">
							<div className="flex items-center w-1/3">
								<div className="w-[20] h-[20] bg-green-400 mr-2"></div>
								プロジェクト
							</div>
							<div className="flex items-center w-1/3">
								<div className="w-[20] h-[20] bg-blue-400 mr-2"></div>
								タスク
							</div>
						</div>
					</div>
					{/* 表の部分 */}
					<div className="grid grid-cols-36 grid-rows-6 bg-green-100 w-full h-[300] my-2 p-4">
						<div className="col-span-12 col-start-1 row-start-1"></div>
						<div className="col-span-12 col-start-25 row-start-1">１月</div>

						<div className="col-span-12 col-start-1 row-start-2 w-[288]">プロジェクト名</div>
						<div className="col-start-13 row-start-2 w-[24]">1</div>
						<div className="col-start-14 row-start-2 w-[24]">2</div>
						<div className="col-start-15 row-start-2 w-[24]">3</div>
						<div className="col-start-16 row-start-2 w-[24]">4</div>
						<div className="col-start-17 row-start-2 w-[24]">5</div>
						<div className="col-start-18 row-start-2 w-[24]">6</div>
						<div className="col-start-19 row-start-2 w-[24]">7</div>
						<div className="col-start-20 row-start-2 w-[24]">8</div>
						<div className="col-start-21 row-start-2 w-[24]">9</div>
						<div className="col-start-22 row-start-2 w-[24]">10</div>
						<div className="col-start-23 row-start-2 w-[24]">11</div>
						<div className="col-start-24 row-start-2 w-[24]">12</div>
						<div className="col-start-25 row-start-2 w-[24]">13</div>
						<div className="col-start-26 row-start-2 w-[24]">14</div>
						<div className="col-start-27 row-start-2 w-[24]">15</div>
						<div className="col-start-28 row-start-2 w-[24]">16</div>
						<div className="col-start-29 row-start-2 w-[24]">17</div>
						<div className="col-start-30 row-start-2 w-[24]">18</div>
						<div className="col-start-31 row-start-2 w-[24]">19</div>
						<div className="col-start-32 row-start-2 w-[24]">20</div>
						<div className="col-start-33 row-start-2 w-[24]">21</div>
						<div className="col-start-34 row-start-2 w-[24]">22</div>
						<div className="col-start-35 row-start-2 w-[24]">23</div>
						<div className="col-start-36 row-start-2 w-[24]">24</div>

						<div className="col-span-6 col-start-1 row-start-3">タスク名</div>
						<div className="col-span-2 col-start-7 row-start-3">期間</div>
						<div className="col-span-4 col-start-9 row-start-3">進捗</div>

						<div className="col-start-13 row-start-3">1</div>
						<div className="col-start-14 row-start-3">1</div>
						<div className="col-start-15 row-start-3">1</div>
						<div className="col-start-16 row-start-3">1</div>
						<div className="col-start-17 row-start-3">1</div>
						<div className="col-start-18 row-start-3">1</div>
						<div className="col-start-19 row-start-3">1</div>
						<div className="col-start-20 row-start-3">1</div>
						<div className="col-start-21 row-start-3">1</div>
						<div className="col-start-22 row-start-3">1</div>
						<div className="col-start-23 row-start-3">1</div>
						<div className="col-start-24 row-start-3">1</div>
						<div className="col-start-25 row-start-3">1</div>
						<div className="col-start-26 row-start-3">1</div>
						<div className="col-start-27 row-start-3">1</div>
						<div className="col-start-28 row-start-3">1</div>
						<div className="col-start-29 row-start-3">1</div>
						<div className="col-start-30 row-start-3">1</div>
						<div className="col-start-31 row-start-3">1</div>
						<div className="col-start-32 row-start-3">1</div>
						<div className="col-start-33 row-start-3">1</div>
						<div className="col-start-34 row-start-3">1</div>
						<div className="col-start-35 row-start-3">1</div>
						<div className="col-start-36 row-start-3">1</div>
					</div>
				</div>

				{/* ボタン */}
				<form action="/project/tasks" className=" mx-auto flex bg-red100 w-5/6 h-[80] justify-evenly">
					<button className="w-40 h-16 border-black border-solid rounded-lg bg-blue-800 text-white">ボタン１</button>
					<button className="w-40 h-16 border-black border-solid rounded-lg bg-blue-800 text-white">ボタン２</button>
					<button className="w-40 h-16 border-black border-solid rounded-lg bg-blue-800 text-white">ボタン３</button>
				</form>

				{/* 組織体制表 */}
				<div className="flex items-center flex-col bg-blue-100 w-5/6 h-[280]" >
					<div className="flex  bg-green-100 w-5/6 h-[60]">
						<h2 className="flex items-center text-2xl w-1/2">ガントチャート</h2>
						<div className="flex items-center w-1/2">
							<div className="w-1/3">プロジェクト</div>
							<div className="w-1/3">タスク</div>
						</div>
					</div>
					<div className="flex  bg-green-100 w-5/6 h-[180] my-2 pl-4">
						表を作る
					</div>
				</div>
			</div>
		</div>
	);
}

const ganttDays: React.CSSProperties = {
	display: "grid",
	gridTemplateColumns: "200px 100px repeat(42, 30px",
}