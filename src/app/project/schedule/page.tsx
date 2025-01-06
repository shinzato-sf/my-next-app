import Image from "next/image";
import React from "react";

export default function Home() {

	const tasks = Array.from({ length: 5 });
	// 日付データ（1～31日分）
	const dates = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
	const days = ["日", "月", "火", "水", "木", "金", "土"]; // 曜日データ
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
					<div className="w-full h-[300px] ml-4">
						<div
							className="grid"
							style={{
								gridTemplateColumns: `210px 80px 130px auto`,
								gridTemplateRows: `30px 30px 30px auto`,
								gridTemplateAreas: `
									"blank blank blank Month"
									"project project project scrollable"
									"title-task title-duration title-task-progress scrollable"
									${tasks.map((_,i) => 
										`"task${i} duration${i} task-progress${i} scrollable"`
									).join(" ")}`,
							}}
						>
							{/* 固定部分 */}
							<div className="bg-blue-900" style={{ gridArea: "blank" }}></div>
							<div
								className="bg-blue-900 p-2 text-white border border-black"
								style={{ gridArea: "project" }}
							>
								プロジェクト
							</div>
							<div
								className="bg-blue-900 p-2 text-white border border-black"
								style={{ gridArea: "Month" }}
							>
								１月
							</div>
							<div
								className="bg-blue-900 p-2 text-white border border-black"
								style={{ gridArea: "title-task" }}
							>
								タスク名
							</div>
							<div
								className="bg-blue-900 p-2 text-white border border-black"
								style={{ gridArea: "title-duration" }}
							>
								期間
							</div>
							<div
								className="bg-blue-900 p-2 text-white border border-black"
								style={{ gridArea: "title-task-progress" }}
							>
								進捗
							</div>
							{tasks.map((_, i) => (
								<React.Fragment key={`react-fragment${i}`}>
									<div
										key={`empty-task${i}`}
										className="px-2 border border-black"
										style={{ 
											gridArea: `task${i}`,
											height: "30px",
											...(i === tasks.length - 1 && { marginBottom: "16px" }),
										}}
									>
									</div>
									<div
										key={`empty-duration${i}`}
										className="px-2 border border-black"
										style={{
											gridArea: `duration${i}`,
											height: "30px",
											...(i === tasks.length - 1 && { marginBottom: "16px" }),
										}}
									>
									</div>
									<div
										key={`empty-task-progress${i}`}
										className="px-2 border border-black"
										style={{
											gridArea: `task-progress${i}`,
											height: "30px",
											...(i === tasks.length - 1 && { marginBottom: "16px" }),
										}}
									>
									</div>
								</React.Fragment>
							))}
							
							{/* 日付・曜日部分 - スクロール可能 */}
							<div className="overflow-x-auto border-t border-black" style={{gridArea: "scrollable",}} >
								<div style={{ gridArea: "title-dates" }}>
									<div
										className="grid"
										style={{ 
											gridTemplateColumns: `repeat(${dates.length}, 30px)`
										}}
									>
										{dates.map((date) => (
											<div
												key={`date-${date}`}
												className="text-center border border-black bg-blue-900 p-2 text-white"
												style={{ width: "30px", height: "30px" }}
											>
												{date}
											</div>
										))}
									</div>
								</div>
								{/* 曜日部分 - スクロール可能 */}
								<div
									style={{ gridArea: "day-dates" }}
								>
									<div
										className="grid"
										style={{ gridTemplateColumns: `repeat(${dates.length}, 30px)` }}
									>
										{dates.map((_, i) => (
											<div
												key={`weekday${i}`}
												className="text-center border border-black bg-blue-900 p-2 text-white"
												style={{ width: "30px", height: "30px" }}
											>
												{days[(i+3 )% 7]} {/* 曜日データを繰り返し表示 */}
											</div>
										))}
									</div>
								</div>
								{/* 空白行 */}
								{tasks.map((_, rowIndex) => (
									<div
										key={`empty-row${rowIndex}`}
										style={{ gridArea: "dates" }}
									>
										<div
											key={`empty-grid-row${rowIndex}`}
											className="grid"
											style={{ gridTemplateColumns: `repeat(${dates.length}, 30px)` }}
										>
											{dates.map((_, colIndex) => (
												<div
													key={`empty-${rowIndex}-${colIndex}`}
													className="text-center border border-dotted border-gray-100 bg-white"
													style={{ width: "30px", height: "30px" }}
												></div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
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
					<div className="flexbg-green-100 w-full h-[60]">
						<h2 className="flex items-center justify-start text-2xl w-1/2">組織体制表</h2>
					</div>
					<div className="w-full h-[240] my-2 ml-6">
						表を作る
					</div>
				</div>
			</div>
		</div>
	);
}
