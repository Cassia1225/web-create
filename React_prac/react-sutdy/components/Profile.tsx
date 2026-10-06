type ProfileProps = {
    name: string;
    age: number;
    isStudent: boolean;
};


export function Profile({name, age, isStudent}: ProfileProps) {
    return (
        <>
        <h3>名前:{name}</h3>
        <h3>年齢:{age}</h3>
        <h3>学生:{isStudent ? "はい" : "いいえ"}</h3>
        </>
        
    )
}