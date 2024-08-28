

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="w-3/12 mx-auto mb-6">
            <p className="text-yellow-600 text-center mb-2">---{subHeading}---</p>
            <h3 className="text-4xl border-y-4 py-5 text-center">{heading}</h3>
        </div>
    );
};

export default SectionTitle;