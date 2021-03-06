import t from 'tcomb-form-native';

export default fromValidation = {
    email : t.refinement(t.String, (s) => {
        return /@/.test(s);
    }),
    password : t.refinement(t.String, (s) =>{
        return s.length >= 6;
    })
}